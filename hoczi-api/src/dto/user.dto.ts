import { IsBoolean, IsEmail, IsNotEmpty, IsString, Min } from "class-validator";

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

export class SubmitKycLevel1Request {

    fullName?: string;

    isApproved?: boolean;


    @IsString()
    @IsNotEmpty()
    phone!: string;

}



export class UserLoginRequest {


    @IsNotEmpty()
    userId!: string;

    @IsString()
    @IsNotEmpty()
    verifyToken!: string;
}


export class SubmitRegisterMerchantRequest {


    @IsString()
    @IsNotEmpty()
    merchantType!: string;

    lockedAmount?: number;

    @IsNotEmpty()
    tradeVolume!: number;

    @IsNotEmpty()
    billUrl!: string;

    @IsNotEmpty()
    telegram!: string;

    @IsNotEmpty()
    address!: string;
    companyName?: string;

    businessLicense?: string;

    description?: string;


}

export class RequestMerchantDepositRequest {


    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsNotEmpty()
    tradeVolume!: number;

    @IsString()
    @IsNotEmpty()
    paymentLink!: string;

    @IsString()
    @IsNotEmpty()
    bankName!: string;

    @IsString()
    @IsNotEmpty()
    bankHolderName!: string;


}

export class ChangePasswordRequest {


    @IsString()
    @IsNotEmpty()
    oldPassword!: string;

    @IsString()
    @IsNotEmpty()
    newPassword!: string;

}

export class CheckValidPhoneRequest {


    @IsString()
    @IsNotEmpty()
    phone!: string;

}


export class UpdateUserProfileRequest {


    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    avatarUrl!: string;

     @IsString()
    @IsNotEmpty()
    coverUrl!: string;

    @IsString()
    @IsNotEmpty()
    about!: string;


}