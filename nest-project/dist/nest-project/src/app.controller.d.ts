import { AppService } from './app.service';
import { Colour } from '@shared';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(color: Colour): string;
}
