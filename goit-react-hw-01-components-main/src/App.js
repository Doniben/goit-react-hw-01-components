import Wrapper from "components/Wrapper";
import Section from "components/Section";
import Container from "components/Container";
import Profile from "components/Profile";
import Friends from "components/Friends";
import StatisticsTable from "components/Statistics";
import Transactions from "components/Transactions";

export const App = ({ data }) => {
    return (
        <Wrapper>
            <Section>
                <Container><Profile {...data.user} /></Container>
            </Section>
            
            <Section>
                <Container>
                    <StatisticsTable items={data.statistics} />
                </Container>
            </Section>

            <Section>
                <Container><Friends items={data.friends} /></Container>
            </Section>

            <Section>
                <Container><Transactions items={data.transactions} /></Container>
            </Section>
        </Wrapper>
    );
}