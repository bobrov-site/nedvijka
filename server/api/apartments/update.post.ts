import { ApartmentSchema } from '~/server/models/apartment.schema'

export default defineEventHandler(async(event) => {
    const body = await readBody(event);
    try {
        // TODO получаем заполненный апартмент
        // 1. убедиться что в базе нет такого апартамента, если есть
        // то убедиться, что provider === fridda
        // 2. Если в базе нет нужно убедиться, что provider === 'bnovo'
        // 3. Если provider === 'bnovo' то мы должны сделать запрос на бново и получить апартамент
        // 4. Загрузить данные в базу из биново по данному апартаменту и использовать для этого метод create.post.ts (!создать его)
    }
    catch(e) {
        console.log(e, 'error edit')
    }
})