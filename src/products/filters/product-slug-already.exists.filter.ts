import { ArgumentsHost, ExceptionFilter, Catch } from "@nestjs/common";


@Catch(ProductSlugAlreadyExistsError)
export class ProductSlugAlreadyExistsErrorFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {

        ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        response.status(409).json({
            statusCode: 409,
            message: exception.message ,

        });

    }

}