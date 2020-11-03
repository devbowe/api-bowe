import { CustomRequest, CustomResponse } from '../interfaces';
import ContactService from '../services/ContactService'

export default class ContactController {
  async create(request: CustomRequest, response: CustomResponse) {
    try {
      const contactService = new ContactService();
      const contact = await contactService.create(request);

      response.send(contact);
    } catch(e) {
      response.handleHttpError(e)
    }
  }
}
