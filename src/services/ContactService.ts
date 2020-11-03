import { ObjectId } from 'mongodb';
import CustomerModel from '../models/CustomerModel';
import sendgrid from '../utils/sendgrid';

export default class ContactService {
  public async create(data: any): Promise<any> {
    const params = Object.assign(data.body);
    const mailMessage = `
    Dados do cliente:

    Nome: ${params.name}
    Email: ${params.email}
    Telefone: ${params.phone}
    `;

    const customer = await CustomerModel.create(params);

    const emailData = {
      to: params.email,
      text: params.mailMessage,
    };

    sendgrid.send(emailData)

    return customer;
  }
}
