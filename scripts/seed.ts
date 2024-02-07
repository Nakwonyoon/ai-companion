const { PrismaClient }= require('@prisma/client')

const db = new PrismaClient()

async function main () {
  try {
    await db.category.createMany({
      data: [
        { name: "Electronics" },
        { name: "Books" },
        { name: "Home & Kitchen" },
        { name: "Clothing"},
        { name: "Beauty & Personal Care" },
        { name: "Health & Household" },
        { name: "Toys & Games" },
        { name: "Sports & Outdoors" },
        { name: "Automotive" },
        { name: "Industrial & Scientific"}
      ]
    })
  } catch (error) {
    console.error("Error: ", error);
  } finally {
    await db.$disconnect()
  }
};

main();