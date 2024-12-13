import { Body, Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  renderIndex() {
    
  }

  @Get('/portfolio')
  @Render('portfolio')
  renderPortfolio(){

  }

  @Get('/about')
  @Render('about')
  renderAbout(){

  }

  @Get('/contact')
  @Render('contact')
  renderContact(){
    
  }

  @Post('/send')
  async connect(@Body() body, @Req() request, @Res() response) {
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const message = body.message;

    const status = await this.appService.sendEmail(firstName,lastName,email,message);
    console.log('email sent!')
    return response.redirect('/contact');
  }
}
