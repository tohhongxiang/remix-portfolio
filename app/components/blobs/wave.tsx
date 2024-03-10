export default function Wave(
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
) {
    return (
        <div {...props}>
            <svg
                id="visual"
                viewBox="0 0 960 50"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <path
                    d="M0 29L26.7 29C53.3 29 106.7 29 160 31.3C213.3 33.7 266.7 38.3 320 34.2C373.3 30 426.7 17 480 12.2C533.3 7.3 586.7 10.7 640 15.2C693.3 19.7 746.7 25.3 800 24.5C853.3 23.7 906.7 16.3 933.3 12.7L960 9"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    stroke="#0066FF"
                    strokeWidth="1"
                ></path>
            </svg>
        </div>
    );
}
