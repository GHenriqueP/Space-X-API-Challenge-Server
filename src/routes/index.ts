import { Router } from 'express';
import { WelcomeController } from '../controllers/WelcomeController'
import { ListLaunchesController } from '../controllers/LaunchesController';
import { ApiFillController } from '../controllers/MaintenanceController';

const router = Router();

const welcome = new WelcomeController();
const apiFill = new ApiFillController();
const searchLaunches = new ListLaunchesController();

router.get('/', welcome.handle)
router.get('/apiFill', apiFill.handle)
router.get('/launches', searchLaunches.handle)

export { router };