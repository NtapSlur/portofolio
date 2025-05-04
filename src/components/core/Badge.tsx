interface BadgeProp {
    text: string,
    custom: string
}

export default function Badge({ text, custom="" }: Readonly<BadgeProp>) {
    return (
        <div className={`inline-block px-2 py-1 rounded-lg text-xs font-bold border ${custom}`}>
            <p>{text}</p>
        </div>
    );
}