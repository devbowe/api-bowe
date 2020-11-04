import { ObjectId } from 'mongodb';
import CustomerModel from '../models/CustomerModel';
// import sendgrid from '../utils/sendgrid';
import rdStationUtils from '../utils/rdstation';

export default class ContactService {
  public async create(data: any): Promise<any> {
    const params = Object.assign(data.body);

    // https://developers.rdstation.com/pt-BR/authentication#conversionEventPostDetails
    const rdStationResponse = await rdStationUtils.createConversion({
      conversion_identifier: 'Site Bowe 2020 - step1',
      email: params.email,
      name: params.name,
      mobile_phone: params.phone,
      website: '',
    });

    // const rdStationData = rdStationResponse.data;
    // params.rdStationId = rdStationData.event_uuid;

    const customer = {};

    // const customer = await CustomerModel.create(params);

    // const mailMessage = `
    // Dados do cliente:

    // Nome: ${params.name}
    // Email: ${params.email}
    // Telefone: ${params.phone}
    // `;

    // const emailData = {
    //   to: params.email,
    //   text: mailMessage,
    // };

    // sendgrid.send(emailData);

    return customer;
  }
}
