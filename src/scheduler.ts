import schedule from 'node-schedule';
import axios from 'axios';

const executeApiFill = async () => {
  try {
    // Substituir 'http://localhost:3000' pela URL correta onde o servidor está rodando
    await axios.get('http://localhost:3000/apiFill');
    console.log('Registros atualizados com sucesso');
  } catch (error: any) {
    console.error('Erro ao atualizar os registros:', error.message);
  }
}

// Configura o agendamento para executar a função todos os dias às 09:00 da manhã
const job = schedule.scheduleJob('0 9 * * *', executeApiFill);
