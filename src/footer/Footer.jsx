import './Footer.css'
import { IconBrandFacebook, IconBrandWhatsapp, IconBrandLinkedin, IconBrandGithub} from '@tabler/icons-react';

export default function Footer() {
    return (
        <div className="footer-basic">
        <footer>
            <div className="social">
                <a href="https://github.com/MOAD-Mekki">
                    <i className="icon ion-social-github">
                        <IconBrandGithub />
                    </i>
                </a>
                <a href="https://linkedin.com/in/mekki-moad">
                    <i className="icon ion-social-linkedin">
                        <IconBrandLinkedin />
                    </i>
                </a>
                <a href="https://www.facebook.com/share/14ZzfdmKXUP/">
                    <i className="icon ion-social-facebook">
                        <IconBrandFacebook />
                    </i>
                </a></div>
            <p className="copyright">Moad Mekki © 2026</p>
        </footer>
    </div>
    );
}