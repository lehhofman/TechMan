const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const comentario_json = require('../docs/comentarios.json');
const equipamentos_json = require('../docs/equipamentos.json');
const perfis_json = require('../docs/perfis.json');
const usuarios_json = require('../docs/usuario.json');

async function importComentarios() {
    await prisma.comentarios.createMany({
        data: comentario_json,
        skipDuplicates: true
    });
}

async function importEquipamentos() {
    await prisma.equipamentos.createMany({
        data: equipamentos_json,
        skipDuplicates: true
    });
}

async function importPerfis() {
    await prisma.perfis.createMany({
        data: perfis_json,
        skipDuplicates: true
    });
}

async function importUsuarios(){
    await prisma.usuarios.createMany({
        data: usuarios_json,
        skipDuplicates: true
    });
}

async function main() {
    await importComentarios();
    await importEquipamentos();
    await importPerfis();
    await importUsuarios();
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });