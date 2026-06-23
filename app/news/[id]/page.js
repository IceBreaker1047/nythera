import prisma from "@/lib/prisma";


const News = async ({ params }) => {
    const { id } = params;
    const news = await prisma.news.findUnique({
        where: { id: parseInt(id) }
    });

    return (
        <div>

        </div>
    )
}

export default News;