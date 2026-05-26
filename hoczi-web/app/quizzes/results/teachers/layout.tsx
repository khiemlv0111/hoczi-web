export default function TeacherLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    console.log('RUN ON SERVER');
    
    return (
        <>
            {children}
        </>
    )
}