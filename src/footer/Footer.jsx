import './Footer.css'
import { IconBrandFacebook, IconBrandWhatsapp, IconBrandLinkedin, IconBrandGithub} from '@tabler/icons-react';

export default function Footer() {
    return (
        <div class="footer-basic">
        <footer>
            <div class="social">
                <a href="https://github.com/MOAD-Mekki">
                    <i class="icon ion-social-github">
                        <IconBrandGithub />
                    </i>
                </a>
                <a href="https://linkedin.com/in/mekki-moad">
                    <i class="icon ion-social-linkedin">
                        <IconBrandLinkedin />
                    </i>
                </a>
                <a href="https://www.facebook.com/share/14ZzfdmKXUP/">
                    <i class="icon ion-social-facebook">
                        <IconBrandFacebook />
                    </i>
                </a></div>
            <p class="copyright">Moad Mekki © 2026</p>
        </footer>
    </div>
    );
}