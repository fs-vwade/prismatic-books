const prisma = require("../prisma");
const seed = async () =>
	await prisma.book.createMany({
		data: [...new Array(10)].map((e, idx) => ({ title: `Book ${idx}` })),
	});

seed()
	.then(async () => await prisma.$disconnect())
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
