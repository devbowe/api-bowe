import { Router } from 'express';
import ContactController from '../controllers/ContactController';
import createContactSchema from '../validation/schemas/ContactSchema';
import ValidationHandler from '../middlewares/ValidationHandler';

const ContactRouter = Router();
const controller = new ContactController();

ContactRouter.post(
  '/send',
  ValidationHandler(createContactSchema),
  (req, res) => {
    controller.create(req, res);
  },
);

export default ContactRouter;
