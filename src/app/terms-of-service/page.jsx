import Header from "../../components/Header";
import FooterCTA from "../../components/FooterCTA";
import TermsOfService from "../../components/Terms-Of-Service";

export default function Page() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-12 min-h-[60vh]">
                <TermsOfService />
            </main>
            <FooterCTA />
        </>
    );
}
