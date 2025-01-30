
import { Catch, ArgumentsHost , ExceptionFilter, Global } from "@nestjs/common";
import {Response} from "express";
import { ProductSlugAlreadyExistsError } from "../errors";

@Catch(ProductSlugAlreadyExistsError)
export class ProductSlugAlreadyExistsErrorFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        response.status(409).json({
            statusCode: 409,
            message: exception.message ,

        });

    }

}