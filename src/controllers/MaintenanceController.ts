import { database } from '../database';
import { Request, Response } from 'express';
import axios from 'axios';

interface LaunchData {
  flightNumber: number;
  logo: string;
  missionName: string;
  launchDate: Date;
  success: boolean;
  rocket: string;
  ytbUrl: string;
}

const apiUrl = 'https://api.spacexdata.com/v5/launches';

export class ApiFillController {
  async handle(request: Request, response: Response) {
    try {
      const apiResponse = await axios.get(apiUrl);

      if (apiResponse.status === 200) {
        const data = apiResponse.data;

        const responseData = data.map((launch: any) => ({
          flightNumber: launch.flight_number,
          logo: launch.links.patch.small,
          missionName: launch.name,
          launchDate: launch.date_utc,
          success: launch.success,
          rocket: launch.rocket,
          ytbUrl: launch.links.webcast,
        }));

        const createdLaunches = await Promise.all(
          responseData.map(async (launchData: LaunchData) => {
            // Verifica se o lançamento com o mesmo flightNumber já existe no banco
            const existingLaunch = await database.spaceXLaunch.findFirst({
              where: { flightNumber: launchData.flightNumber },
            });
        
            const dataToCreate = {
              flightNumber: launchData.flightNumber,
              missionName: launchData.missionName,
              launchDate: launchData.launchDate,
              rocket: launchData.rocket,
              success: launchData.success !== null ? launchData.success : false,
              logo: launchData.logo || "", // Define como string vazia se for nulo
              ytbUrl: launchData.ytbUrl || "", // Define como string vazia se for nulo
            };
        
            if (!existingLaunch) {
              // Se não existir, cria o registro no banco
              return database.spaceXLaunch.create({
                data: dataToCreate,
              });
            } else {
              // Se existir, atualiza o registro existente
              return database.spaceXLaunch.update({
                where: { id: existingLaunch.id },
                data: dataToCreate,
              });
            }
          })
        );

        response.json(createdLaunches);
      } else {
        response.status(500).json({ error: 'Erro ao fazer a requisição à API' });
      }
    } catch (error: any) {
      response.status(500).json({ error: 'Erro ao fazer a requisição à API: ' + error.message });
    }
  }
}
