import Image from 'next/image';
import Link from 'next/link';


function Next() {
    return (<>
        <section className='text-sky-600 cursor-pointer fixed top-44 left-14'>
        <b className='inline-block text-slate-950 cursor-default'>Contents</b>
        <small className='ml-6 bg-slate-200 rounded-sm cursor-pointer hover:bg-slate-50 text-slate-950'>hide</small>
        <hr />
            <Link href={'#'}><h1 className='hover:underline my-2 text-sm'>(Top)</h1></Link>
            <Link href={'#background'}><h1 className='hover:underline my-2 text-sm'>Background</h1></Link>
            <Link href={'#history'}><h1 className='hover:underline my-2 text-sm'>Development history</h1></Link>
            <Link href={'#features'}><h1 className='hover:underline my-2 text-sm'>Styling and features</h1></Link>
            <Link href={'#also'}><h1 className='hover:underline my-2 text-sm'>See also</h1></Link>
            <Link href={'#links'}><h1 className='hover:underline my-2 text-sm'>External links</h1></Link>
        </section>
        <div className="w-[920px] relative left-[360px] h-auto">
            <h1 className="relative bottom-10 font-serif text-[28px]">Next.js</h1>
            <div className="relative bottom-[34px] text-sm"><h5 className="inline-block ">Article</h5>&nbsp;&nbsp;&nbsp;
                <h5 className="inline-block text-sky-600 cursor-pointer hover:underline">Talk</h5>
                <div className="inline-block relative left-[600px]">
                    <h5 className="inline-block">Read</h5>&nbsp;&nbsp;&nbsp;
                    <h5 className="inline-block text-sky-600 cursor-pointer"><span className='hover:underline'>Edit</span>
                        &nbsp;&nbsp;&nbsp;<span className='hover:underline'>View history</span></h5>
                </div>
            </div>
            <p className="relative bottom-4 text-sm">From Wikipedia, the free encyclopedia</p>
            <div className="inline-block bg-stone-50 border float-right w-[312px] h-[518px] pl-1">
                <h1 className='relative left-[126px] bottom-[25px]'><b>Next.js</b></h1>
                <section className='relative left-[96px]'>
                    <a href="https://en.wikipedia.org/wiki/File:Nextjs-logo.svg" target="_blank" rel="noopener noreferrer">
                        <Image className='inline-block' alt='next' width={120} height={25} src={'/Nextjs-logo.svg.png'} />
                    </a>
                    <h1>The Next.js Logo</h1>
                </section>
                <p><b className='text-sky-600 hover:underline cursor-pointer'>Original author(s)</b> &nbsp;&nbsp;&nbsp;<small>Guillermo Rauch</small></p>
                <p><b className='text-sky-600 hover:underline cursor-pointer'>Developer(s)</b>&nbsp;&nbsp;&nbsp;<small>	Vercel and the open-source community</small></p>
                <p><b>Initial release</b>&nbsp;&nbsp;&nbsp;<small>October 25, 2016; 7 years ago</small></p><br />
                <p><b className='text-sky-600 hover:underline cursor-pointer'>Stable release</b>&nbsp;&nbsp;&nbsp;<small>14.2.3 Edit this on Wikidata / 24 April 2024; 52 days ago</small></p><br />
                <p><b className='text-sky-600 hover:underline cursor-pointer'>Preview release</b>&nbsp;&nbsp;&nbsp;<small>v14.3.0-canary.4</small></p>
                <p><b className='text-sky-600 hover:underline cursor-pointer'>Repository</b>&nbsp;&nbsp;&nbsp;
                    <a href="https://github.com/vercel/next.js" target="_blank" rel="noopener noreferrer"><small className='text-sky-600 hover:underline'>github.com/vercel/next.js</small></a>	</p>
                <p><b>Written in</b>&nbsp;&nbsp;&nbsp; <span className='text-sky-600 hover:underline cursor-pointer'>JavaScript</span>
                    ,<span className='text-sky-600 hover:underline cursor-pointer'>TypeScript</span> ,
                    and <span className='text-sky-600 hover:underline cursor-pointer'>Rust</span></p><br />
                <p><b className='text-sky-600 hover:underline cursor-pointer'>Platform</b> &nbsp;&nbsp;&nbsp; <small>
                    <span className='text-sky-600 hover:underline cursor-pointer'>Web platform</span></small></p>
                <p><b className='text-sky-600 hover:underline cursor-pointer'>Size</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <small>	17.0
                    <span className='text-sky-600 hover:underline cursor-pointer'>MB</span> </small></p>
                <p><b className='text-sky-600 hover:underline cursor-pointer'>Type</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <small>
                    <span className='text-sky-600 hover:underline cursor-pointer'>Web application framework</span></small></p>
                <p><b className='text-sky-600 hover:underline cursor-pointer'>License</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <small>
                    <span className='text-sky-600 hover:underline cursor-pointer'>MIT License</span></small></p>
                <p><b>Website</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><small className='text-sky-600 hover:underline'>	nextjs.org</small></a> </p>
            </div>
            <div className="text-base">
                <p>
                    <b>Next.js</b> is an <span className='text-sky-600 hover:underline cursor-pointer'>open-source </span>
                    <span className='text-sky-600 hover:underline cursor-pointer'>web development framework</span>
                    &nbsp;created by the private company <span className='text-sky-600 hover:underline cursor-pointer'>Vercel </span>
                    providing <span className='text-sky-600 hover:underline cursor-pointer'>React</span>
                    -based web applications with <span className='text-sky-600 hover:underline cursor-pointer'>server-side rendering</span>
                    &nbsp;and <span className='text-sky-600 hover:underline cursor-pointer'>static website</span> generation. <br /><br />

                    React documentation mentions Next.js among "Recommended Toolchains" advising it to developers when "building a server-rendered website with Node.js".[6] Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side. <br /><br />

                    The copyright and trademarks for Next.js are owned by Vercel,[7] which also maintains and leads its open-source development. <br />
                </p><br /><br />
                <h1 id='background' className="text-2xl font-serif">Background</h1><hr className="my-1 border-neutral-400 w-[600px]" />
                <p>Next.js is a <span className='text-sky-600 hover:underline cursor-pointer'>React </span>
                    framework that enables several extra features, including <span className='text-sky-600 hover:underline cursor-pointer'>server-side rendering</span>
                    &nbsp;and generating static websites
                    .[9] React is a <span className='text-sky-600 hover:underline cursor-pointer'>JavaScript library </span>
                    that is traditionally used to build web applications rendered in the client's browser with
                    JavaScript.[10] Developers recognize several problems with this strategy however, such as not catering to users who do not
                    have access to JavaScript or have disabled it, potential security issues, significantly extended page loading times,
                    and harm to the site's overall&nbsp;<span className='text-sky-600 hover:underline cursor-pointer'>search engine optimization</span>
                    .[10] Frameworks such as Next.js sidestep these problems by
                    allowing some or all of the website to be rendered on the server-side before being sent to the client.[10][11] Next.js is
                    one of the most popular frameworks for React.[12] It is one of several recommended "toolchains" available when starting a
                    new app, all of which provide a layer of abstraction to aid in common tasks.[13] Next.js requires
                    <span className='text-sky-600 hover:underline cursor-pointer'>Node.js </span>  and can be
                    initialized using&nbsp;<span className='text-sky-600 hover:underline cursor-pointer'>Node Package Manager</span> .</p><br />
                <p>Google has contributed to the Next.js project, including 43 pull requests in 2019.[14] As of March 2022, the framework is
                    used by many large websites, including <span className='text-sky-600 hover:underline cursor-pointer'>Walmart</span>
                    , <span className='text-sky-600 hover:underline cursor-pointer'>Apple</span>
                    ,<span className='text-sky-600 hover:underline cursor-pointer'>Nike</span> ,
                    <span className='text-sky-600 hover:underline cursor-pointer'>Netflix</span>,
                    <span className='text-sky-600 hover:underline cursor-pointer'>TikTok</span>,
                    <span className='text-sky-600 hover:underline cursor-pointer'>Uber</span>,
                    <span className='text-sky-600 hover:underline cursor-pointer'>Lyft</span>, and
                    <span className='text-sky-600 hover:underline cursor-pointer'> Starbucks</span>.[10] In early 2020,
                    Vercel raised $21 million in Series A funding to support improvements to the software.[1] The framework's original author,
                    Guillermo Rauch, is currently the CEO of Vercel, and the project's lead maintainer is Tim Neutkens.[1</p><br />
                <h1 id='history' className="text-2xl font-serif">Development history</h1><hr className="my-1 border-neutral-400 " />
                <p>Next.js was first released as an open-source project on GitHub on October 25, 2016.[3] It was originally developed
                    based on six principles: out-of-the-box functionality requiring no setup, JavaScript everywhere, all functions are
                    written in JavaScript, automatic code-splitting and server-rendering, configurable data-fetching, anticipating
                    requests, and simplifying deployment.</p><br />
                <p>Next.js 2.0 was announced in March 2017 including several improvements that made it easier to work with
                    small websites. It also increased the build efficiency and improved the scalability of the hot-module
                    replacement feature.[17]</p><br />
                <p>Version 7.0 was released in September 2018 with improved error handling
                    and support for React's context API for improved dynamic route handling. This was also the first version to upgrade to Webpack 4.[18]</p><br />
                <p>Version 8.0 was released in February 2019 and was the first version to offer serverless deployment of applications, in which the code is split up into lambda functions
                    that are run on demand. The version also reduced the time and resources required for static exports and improved prefetch
                    performance.[19]</p><br />
                <p>Version 9.3, announced in March 2020, included various optimizations and global Sass and CSS module support.[20]</p><br />
                <p>On July 27, 2020
                    Next.js version 9.5 was announced, adding new capabilities including incremental static regeneration,
                    rewrites, and redirect support.[21]</p><br />
                <p>On June 15, 2021 Next.js version 11 was released, introducing among others: Webpack 5 support, preview of real-time collaborative coding functionality "Next.js Live",
                    and experimental function of automatic conversion from Create React App to Next.js compatible form "Create React
                    App Migration".[22]</p><br />
                <p>On October 26, 2021, Next.js 12 was released,
                    adding a Rust compiler, making the compilation faster, AVIF support, Edge Functions & Middleware,
                    and Native ESM & URL Imports.[23]</p><br />
                <p>On October 26, 2022, Vercel released Next.js 13. This major release brought about a new routing pattern in beta, with the addition of the App Router that includes support for layouts, React Server Components, streaming, and a new set of data fetching methods. Furthermore, Vercel announced a new toolchain
                    for front-end development called Turbo, including Turbopack as a successor to Webpack, Turborepo for incremental
                    build systems.[24]</p><br />
                <p>In May 2023, Vercel released Next.js 13.4. This brought with it the stable version of App Router,
                    which allows developers to use it in production.[25]</p><br />
                <p>In October 2023, Vercel released Next.js 14. Which comes with improve memory management with using edge
                    runtime.</p><br /><br />
                <h1 id='features' className="text-2xl font-serif">Styling and features</h1><hr className="my-1 border-neutral-400 " />
                <p>Next.js supports styling with CSS as well as precompiled Scss and Sass, CSS-in-JS, and styled JSX.[13] In addition, it is built with TypeScript support and smart bundling.[27] The open-source transpiler SWC is used to transform and compile code into JavaScript usable by a browser.[28] Webpack, another open-source tool, is used to bundle
                    the modules afterward, however it is currently being replaced with TurboPack.[29] All of these tools are used with npm
                    in a terminal.</p><br />
                <p>The main feature of Next.js is its use of server-side rendering to reduce the burden on web browsers and provide enhanced security[citation needed]. This can be done for any part of the application or the entire system, allowing for content-rich pages to be singled out for server-side rendering.[10] It can also be done only for first-time visitors, to reduce the burden on web browsers that have yet to download any of the site's assets.[11] The "hot reloading" feature detects changes as they are made and re-renders the appropriate pages so the server avoids the need to be restarted. This allows changes made to the application code to be immediately reflected in the web browser, though some browsers will require the page to be refreshed.[10] The software uses page-based routing for developer convenience and includes support for dynamic routing. Other features include hot-module replacement so that modules can be
                    replaced live, automatic code splitting, which only includes code necessary to load the page, and page prefetching to reduce load
                    time.</p><br />
                <p>Next.js also supports Incremental Static Regeneration[30] and static site generation - a compiled version of the website is usually built during build time and saved as a .next folder. When a user makes a request, the pre-built version which are static HTML pages are cached and sent to them. This makes the load time
                    very fast, but it's not suitable for every website, particularly for interactive sites that change often and utilize a lot of user
                    input.</p><br /><br />
                <h1 id='also' className="text-2xl font-serif">See also</h1><hr className="my-1 border-neutral-400 " />
                <ul className="mx-4 list-disc">
                    <li ><span className='text-sky-600 hover:underline cursor-pointer'>Gatsby (software)</span></li>
                    <li><span className='text-sky-600 hover:underline cursor-pointer'>LAMP (software bundle)</span></li>
                    <li><span className='text-sky-600 hover:underline cursor-pointer'>Nuxt.js</span></li>
                    <li><span className='text-sky-600 hover:underline cursor-pointer'>Remix (web framework)</span></li>
                </ul><br />
                <h1 id='links' className="text-2xl font-serif">External links</h1><hr className="my-1 border-neutral-400 " />
                <ul className="mx-4 list-disc">
                    <li ><span className='text-sky-600 hover:underline cursor-pointer'>"Case Study - Hulu | Next.js"</span>
                        <b> nextjs.org</b>. Retrieved 2020-10-16.</li>
                    <li>Smith, Craig S.<span className='text-sky-600 hover:underline cursor-pointer'> "Front-end frameworks are about to get even cooler, says Google lead" </span>
                        <b className='text-sky-600 hover:underline cursor-pointer'> TechRepublic. </b>Retrieved 2020-10-16. </li>
                    <li>Asay, Matt (2020-06-01).<span className='text-sky-600 hover:underline cursor-pointer'> "How GraphQL turned web development on its head" </span>
                        <b className='text-sky-600 hover:underline cursor-pointer'>InfoWorld </b>. Retrieved 2020-10-20.
                    </li>
                </ul>
                <div className='h-8 border mt-6 border-current pt-1'>
                    <p className='text-sky-600 hover:underline cursor-pointer inline-block'>Categories: Web frameworks </p>&nbsp;|&nbsp;
                    <p className='text-sky-600 hover:underline cursor-pointer inline-block'> JavaScript web frameworks </p>&nbsp;|&nbsp;
                    <p className='text-sky-600 hover:underline cursor-pointer inline-block'> Software using the MIT license </p>&nbsp;|&nbsp;
                    <p className='text-sky-600 hover:underline cursor-pointer inline-block text-sm'> Free static website generators</p>
                </div>
            </div>
        </div>
        <p>
            <small className='relative top-[85px] left-7 w-[95%]' id='123'>
                This page was last edited on 13 June 2024, at 19:31 (UTC). <br />
                Text is available under the <span className='text-sky-600 hover:underline cursor-pointer'>Creative Commons Attribution-ShareAlike
                    License 4.0;</span> additional terms may apply. By using this site, you
                agree to the <span className='text-sky-600 hover:underline cursor-pointer'>Terms of Use</span> and
                <span className='text-sky-600 hover:underline cursor-pointer'> Privacy Policy</span>. Wikipedia® is a registered
                trademark of the <span className='text-sky-600 hover:underline cursor-pointer'>Wikimedia Foundation, Inc</span>., a non-profit
                organization.
            </small>
        </p>
    </>);
}

export default Next;