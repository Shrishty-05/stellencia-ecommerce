import Layout from "../components/common/Layout"

import Categories from "../components/Home-sections/Categories"
import Hero from "../components/Home-sections/Hero"
import Slides from "../components/Home-sections/Slides"
import RecipientSection from "../components/Home-sections/RecipientSection.jsx"
import Occassion from "../components/Home-sections/Occasion"
import Promise from "../components/Home-sections/OurPromise"
import SearchBar from "../components/common/SearchBar"

export default function Home(){
    return <>
    <Layout>

        <main className="my-2">
            <SearchBar/>
            <Hero/>
            <Categories/>
            <RecipientSection/>
            <Slides/>
            {/* <Best sellers/> */}
            <Occassion/>
            <Promise/>
        </main> 
    </Layout>
    </>
}