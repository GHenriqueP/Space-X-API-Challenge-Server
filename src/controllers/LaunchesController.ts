import { Request, Response } from "express";
import { database } from "../database";

export class ListLaunchesController {
  async handle(request: Request, response: Response) {
    const { search } = request.query;
    const { page, limit } = request.query;
    const pageValue = page ? Number(page) : 1;
    const limitValue = limit ? Number(limit) : 4;

    try {
      let launches;
      let totalDocs;

      if (search) {
        const searchString = String(search);

        launches = await database.spaceXLaunch.findMany({
          where: {
            OR: [
              { missionName: { contains: searchString } },
              { rocket: { equals: searchString } },
              {
                flightNumber: !isNaN(Number(searchString)) ? Number(searchString) : undefined,
              },
              {
                launchDate: !isNaN(Date.parse(searchString))
                  ? new Date(searchString)
                  : undefined,
              },
              { success: searchString === "true" ? true : searchString === "false" ? false : undefined },
            ].filter(Boolean), // Remove valores undefined do array
          },
          skip: (pageValue - 1) * limitValue,
          take: limitValue,
        });

        totalDocs = await database.spaceXLaunch.count({
          where: {
            OR: [
              { missionName: { contains: searchString } },
              { rocket: { equals: searchString } },
              {
                flightNumber: !isNaN(Number(searchString)) ? Number(searchString) : undefined,
              },
              {
                launchDate: !isNaN(Date.parse(searchString))
                  ? new Date(searchString)
                  : undefined,
              },
              { success: searchString === "true" ? true : searchString === "false" ? false : undefined },
            ].filter(Boolean),
          },
        });
      } else {
        launches = await database.spaceXLaunch.findMany({
          skip: (pageValue - 1) * limitValue,
          take: limitValue,
        });

        totalDocs = await database.spaceXLaunch.count();
      }

      const totalPages = Math.ceil(totalDocs / limitValue);
      const hasNext = pageValue < totalPages;
      const hasPrev = pageValue > 1;

      const responseJSON = {
        totalDocs,
        page: pageValue,
        totalPages,
        hasNext,
        hasPrev,
        launches,
      };

      response.json(responseJSON);
    } catch (error) {
      console.error('Erro ao buscar lançamentos SpaceX:', error);
      response.status(500).json({ message: 'Erro ao buscar lançamentos SpaceX' });
    }
  }
}
