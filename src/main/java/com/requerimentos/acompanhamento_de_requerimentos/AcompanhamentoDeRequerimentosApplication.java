package com.requerimentos.acompanhamento_de_requerimentos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@SpringBootApplication
public class AcompanhamentoDeRequerimentosApplication {

	public static void main(String[] args) {
		SpringApplication.run(AcompanhamentoDeRequerimentosApplication.class, args);
	}

}

@RestController
class RequerimentoController(RequerimentoService service) {

        @GetMapping("/requerimentos")
        ArrayList<Protocolo> index() {
            return service.findRequerimentos();
        }

        @GetMapping("/requerimentos/{id}")
        ArrayList<Protocolo> index(@PathVariable("id") int id) {
            return service.findRequerimentoById(id);
        }

        @PostMapping("/requerimentos")
        void post(@RequestBody Protocolo requerimento) {
            service.post(requerimento);
        }
}

@Service
class RequerimentoService(JdbcTemplate db) {

}

