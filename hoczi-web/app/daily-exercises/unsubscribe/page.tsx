import { UnsubscribePage } from "./UnsubscribePage";

interface Props { searchParams: Promise<{ token?: string | string[] }> }

// Public page opened from the "Hủy nhận" link in daily exercise emails.
export default async function Page({ searchParams }: Props) {
    const { token } = await searchParams;
    return (
        <>
            <UnsubscribePage token={typeof token === 'string' ? token : ''} />
        </>
    )
}
