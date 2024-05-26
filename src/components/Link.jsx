export default function Link({ link }) {

    return <a href={link.url} target="_blank" rel="noreferrer">
        {link.type} - {link.platform} <i className="fas fa-external-link-alt"></i>
    </a>
}