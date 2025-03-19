import { CustomerReviews,Footer, Hero, PopularProducts, Services, Subscribe} from "./sections";
import Nav from "./components/nav";
const App = () => (
  <main className="relative">
     <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x bg-clip-padding-t pb-8">
      <Footer />
    </section>

  </main>
);
export default App;