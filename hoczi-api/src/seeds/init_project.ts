// import { userRepository } from "../repositories/userRepository";
// import { roleRepository } from "../repositories/roleRepository";
// import { permissionRepository } from "../repositories/permissionRepository";
// import {data} from "../helpers/data.json";
import bcrypt from 'bcrypt'
import { userRepository } from '../repositories/userRepository';
import { tenantRepository } from '../repositories/tenantRepository';
import { TenantPlanType } from '../entities/Tenant';
// import { userRoleRepository } from "../repositories/roleRepository";

// import { kycRepository } from "../repositories/kycRepository";


export const initProject = async () => {

    const users = await userRepository.findAll(1,20);
 



    if (users.total === 0) {
        const initTenantDto = {
            name: 'tefihub',
            code: 'TEFIHUB',
            description: 'Tefihub LTD',
            domain: 'https://tefihub.com',
            plan_type: TenantPlanType.ENTERPRISE,
        };
        const tenant = await tenantRepository.createOne(initTenantDto);
        const initUser = {
            tenant_id: tenant.id,
            name: "Le Van Toan",
            email: "letoan285@gmail.com",
            username: "letoan285",
            status: "active",
            role: 'super_admin',
            password: "Toan@123"
        };
        const hashPassword = await bcrypt.hash(initUser.password, 10);

        initUser.password = hashPassword;
        // initUser.created_at = new Date();
        // let userRoles = await roleRepository.findByIds([1, 2, 3, 4, 5, 6, 7, 8]);
        // initUser.roles = await roleRepository.findByIds([1, 2, 3, 4, 5, 6, 7, 8]);
        

        // const userRoles = await roleRepository.save(roles);
        // const myRole = userRoles.filter(x => x.title === 'owner')[0];




        const saveUser = await userRepository.createInitUser(initUser);
        console.log("INIT USER", saveUser);
        



        // const rolePermission = await permissionRepository.save(permissions);

    }

}