import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PkmService } from './pkm/pkm.service';
import { Pkm } from './pkm/schemas/pkm.schema';
import axios from 'axios';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const pkmService = app.get(PkmService);

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  async function pkmRequest(id: number) {
    const response = await axios.get(`${baseUrl}/${id}`);
    if (response.status === 200) {
      // tratando o tipo
      let types = (response.data.types)
      if (types[1]) {
        var tipo = [response.data.types[0].type.name, response.data.types[1].type.name]
      }
      else {
        var tipo = [response.data.types[0].type.name]
      }
      const Pkm: Pkm = {
        id: response.data.id,
        name: response.data.name,
        sprite: response.data.sprites.front_default,
        types: tipo
      }

      return Pkm
    }
    else {
      console.error(`Falha na solicitação. Código de status: ${response.status}`);
    }
  }

  await app.listen(3000, () => {
    console.log('Aplicação NestJS iniciada com sucesso!');

    setTimeout(async () => {
      console.log('Seed de pokemons no banco');

      let result = await pkmService.findAll()
      var numpkm = result.length

      while (numpkm != 151) {
        let pkm = await pkmRequest(numpkm + 1);
        let result = await pkmService.create(pkm)
        console.log("add pokemon " + result.name + " de nº " + result.id)
        numpkm++
      }
      
      console.log("seed finalizada")
    }, 2000);
  });
}
bootstrap();
