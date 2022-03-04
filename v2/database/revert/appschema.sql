-- Revert flipr:appschema from pg

BEGIN;

DROP TABLE app;

COMMIT;
