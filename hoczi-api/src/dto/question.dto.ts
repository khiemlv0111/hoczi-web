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

  @IsOptional()
  type!: string;

  @IsOptional()
  categoryId!: number;

  @IsOptional()
  topicId!: number;

  @IsOptional()
  difficulty!: string;

  @IsOptional()
  code!: string;


  @IsString()
  @IsOptional()
  explanation?: string;
}
