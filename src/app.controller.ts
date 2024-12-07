import { Controller, Get, Render } from '@nestjs/common';
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
}
