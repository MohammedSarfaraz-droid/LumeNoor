import Header from "../../components/Header";
import FooterCTA from "../../components/FooterCTA";
import PrivacyPolicy from "../../components/Privacy-Policy";

export default function Page() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-12 min-h-[60vh]">
                <PrivacyPolicy />
            </main>
            <FooterCTA />
        </>
    );
}
