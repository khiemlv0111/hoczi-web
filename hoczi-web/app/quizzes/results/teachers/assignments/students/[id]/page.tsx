import { AssignmentStudentDetailPage } from "./AssignmentStudentDetailPage";


export default async function Page({params}: {params: Promise<{ id: string }>}){
   const { id } = await params;

    return (
        <>
            <AssignmentStudentDetailPage id={Number(id)}/>
        </>
    )
}



