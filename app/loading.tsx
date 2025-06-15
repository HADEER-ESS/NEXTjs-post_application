export default function loading() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // full screen height
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 64, // or use margin between dots
            }}>
                <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    background: 'red',
                }} />
                <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    background: 'yellow',
                }} />
                <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    background: 'green',
                }} />
            </div>
        </div>
    )
}