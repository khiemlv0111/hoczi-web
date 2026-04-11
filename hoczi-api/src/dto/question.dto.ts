import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateUserRequest {

    @IsString()
    fullName?: string;

    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    // @Min(2)
    email!: string;
}

export class CreateQuestionRequest {


  @IsNotEmpty()
  content!: string;

  @IsEnum(['single', 'multiple', 'true_false'])
  type!: 'single' | 'multiple' | 'true_false';


  @IsString()
  @IsOptional()
  explanation?: string;
}