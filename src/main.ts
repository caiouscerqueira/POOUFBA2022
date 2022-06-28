import express from 'express';
import cors from 'cors';
import { RequerimentoController } from 'controllers/requerimento.controller';
import { RequerimentoService } from 'services/requerimento.service';
import { Protocolo } from 'models/protocolo.model';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: express.Request, res: express.Response): void => {
   res.status(200).json({
      message: "Works!",
   });
});

app.get("/requerimentos", async (req: express.Request, res: express.Response): Promise<void> => {
   const requerimentoService = new RequerimentoService();
   const requerimentoController = new RequerimentoController(requerimentoService);

   const requerimentos = await requerimentoController.listaRequerimentos();

   res.status(200).json({
      message: "Requerimentos retornados com sucesso!",
      metadata: requerimentos,
   });
});

app.get("/requerimentos/:id", async (req: express.Request, res: express.Response): Promise<void> => {
   const requerimentoId = req.params.id;

   const requerimentoService = new RequerimentoService();
   const requerimentoController = new RequerimentoController(requerimentoService);

   const requerimento = await requerimentoController.retornaRequerimento(Number(requerimentoId));

   res.status(200).json({
      message: "Requerimento retornado com sucesso!",
      metadata: requerimento,
   });
});

app.post("/requerimentos", async (req: express.Request, res: express.Response): Promise<void> => {
   const requerimento = req.body as {
      idProtocolo: number,
      nomeProtocolo: string,
      stProtocolo: string,
      funcionarioNome: string,
   };
   const time = (new Date()).toISOString().split('T')[0];

   const requerimentoPreparado = new Protocolo(
      requerimento.idProtocolo,
      requerimento.nomeProtocolo,
      time,
      time,
      requerimento.stProtocolo,
      requerimento.funcionarioNome,
   );

   const requerimentoService = new RequerimentoService();
   const requerimentoController = new RequerimentoController(requerimentoService);

   const requerimentoSalvo = await requerimentoController.criaRequerimento(
      requerimentoPreparado
   );

   res.status(200).json({
      message: "Requerimento criado com sucesso!",
      metadata: requerimentoSalvo,
   });
});

// TODO
// app.put("/requerimentos/:id", async (req: express.Request, res: express.Response) => {
//    res.status(200).json({
//       message: "Requerimento atualizado com sucesso!",
//    });
// });

app.delete("/requerimentos/:id", async (req: express.Request, res: express.Response) => {
   const requerimentoId = req.params.id;

   const requerimentoService = new RequerimentoService();
   const requerimentoController = new RequerimentoController(requerimentoService);

   await requerimentoController.removeRequerimento(Number(requerimentoId));

   res.status(200).json({
      message: "Requerimento removido com sucesso!",
   });
});

app.listen(3001, (): void => {
   // eslint-disable-next-line no-console
   console.log('Server started on port 3001!');
});
