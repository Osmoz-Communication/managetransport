import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';

export interface ContactRequest {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  message: string;
}

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async sendContactEmail(@Body() contactData: ContactRequest) {
    try {
      await this.contactService.sendContactEmail(contactData);
      return { success: true, message: 'Email envoyé avec succès' };
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      return { success: false, message: "Erreur lors de l'envoi de l'email" };
    }
  }
}