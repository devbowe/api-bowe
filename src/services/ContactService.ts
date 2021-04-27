import { ObjectId } from 'mongodb';
import CustomerModel from '../models/CustomerModel';
// import sendgrid from '../utils/sendgrid';
import rdStationUtils from '../utils/rdstation';

export default class ContactService {
  public async create(data: any): Promise<any> {
    const params = Object.assign(data.body);

    const conversionParam = {
      conversion_identifier: `Site Bowe ${new Date().getFullYear()} - ${params.utm_term}`,
      email: params.email,
      name: params.name,
      mobile_phone: params.phone,
      cf_leads_modelo_negocio: params.modelbusiness,
      cf_my_custom_field: params.namebusiness,
      cf_numero_de_funcionarios_0: params.numberemployees,
      cf_natureza_do_negocio: params.optionbusiness,
      company_site: params.website,
      cf_cargo_na_empresa: params.office,
      cf_utm_campaign: params.utm_campaign,
      cf_utm_content: params.utm_content,
      cf_utm_medium: params.utm_medium,
      cf_utm_source: params.utm_source,
      cf_utm_term: params.utm_term,
    };

    // https://developers.rdstation.com/pt-BR/authentication#conversionEventPostDetails
    const rdStationResponse = await rdStationUtils.createConversion(
      conversionParam,
    );

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
