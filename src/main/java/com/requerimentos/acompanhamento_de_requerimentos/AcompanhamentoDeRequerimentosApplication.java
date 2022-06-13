package com.requerimentos.acompanhamento_de_requerimentos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class AcompanhamentoDeRequerimentosApplication {

	public static void main(String[] args) {
		SpringApplication.run(AcompanhamentoDeRequerimentosApplication.class, args);
	}

}

@RestController
class RequerimentoController {
        private RequerimentoService service;

        @GetMapping("/requerimentos")
        List<Protocolo> index() {
            return this.service.findRequerimentos();
        }

        @GetMapping("/requerimentos/{id}")
        Protocolo index(@PathVariable("id") int id) {
            return this.service.findRequerimentoById(id);
        }

        @PostMapping("/requerimentos")
        void post(@RequestBody Protocolo requerimento) {
            this.service.postRequerimento(requerimento);
        }
}

@Service
class RequerimentoService {
    @Autowired
    private JdbcTemplate db;

    List<Protocolo> findRequerimentos() {
        return this.db.query("SELECT * from protocolos", BeanPropertyRowMapper.newInstance(Protocolo.class));
    }

    Protocolo findRequerimentoById(int id) {
        try {
            Protocolo protocolo = this.db.queryForObject("SELECT * FROM tutorials WHERE id=?", BeanPropertyRowMapper.newInstance(Protocolo.class), id);
            return protocolo;
        } catch (IncorrectResultSizeDataAccessException e) {
            return null;
        }
    }

    int postRequerimento(Protocolo protocolo) {
        return this.db.update("INSERT INTO tutorials (idProtocolo, nomeProtocolo, dataCadastro, dataAtualizacao, stProtocolo) VALUES(?,?,?,?,?)",
                new Object[] { protocolo.getIdProtocolo(), protocolo.getNomeProtocolo(), protocolo.getDataCadastro(), protocolo.getDataAtualizacao(), protocolo.isStProtocolo() });
    }
}
