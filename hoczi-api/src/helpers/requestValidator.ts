import { ClassConstructor, plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator"


const validatorError = async (input: any): Promise<ValidationError[] | false> => {
    const errors = await validate(input, {
        validatorError: { target: true },
    });
    if (errors.length) {
        return errors;
    }
    return false;
}

const flattenErrors = (errors: ValidationError[]): string[] => {
    return errors.flatMap((error) => {
        // Có constraints → lấy message
        if (error.constraints) {
            return Object.values(error.constraints);
        }
        // Nested object (ValidateNested) → đệ quy vào children
        if (error.children?.length) {
            return flattenErrors(error.children);
        }
        return [];
    });
};
export const RequestValidator = async <T>(
    type: ClassConstructor<T>,
    body: any
): Promise<{ errors: boolean | string; input: T }> => {
    const input = plainToClass(type, body);
    const errors = await validatorError(input);

    if (errors) {
        const errorMessage = flattenErrors(errors).join(", ");
        return { errors: errorMessage, input };
    }

    return { errors: false, input };
};