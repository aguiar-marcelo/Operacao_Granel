INSERT INTO
    CARGA (
        COD_OPERACAO,
        COD_CARGA,
        TIPO_DOC,
        NUMERO_DOC,
        REFERENCIA,
        COD_CLIENTE,
        DATA_EMISSAO,
        COD_PRODUTO,
        NCM,
        IND_CARGAIMO,
        QTDE_MANIFESTADA,
        STATUS_CARGA,
        USUARIO,
        DATA_CADASTRO
    )
VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);

INSERT INTO
    CARGA (
        COD_OPERACAO,
        TIPO_DOC,
        NUMERO_DOC,
        DATA_EMISSAO,
        COD_CLIENTE,
        REFERENCIA,
        COD_PRODUTO,
        NCM,
        IND_CARGAIMO,
        QTDE_MANIFESTADA,
        STATUS_CARGA,
        USUARIO
    )
VALUES
    ());