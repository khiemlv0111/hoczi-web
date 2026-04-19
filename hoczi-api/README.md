# 1. Dump toàn bộ data
sudo -u postgres pg_dump hoczi_db > hoczi_production.sql

# 2. Tạo db mới
sudo -u postgres psql -c "CREATE DATABASE hoczi_production OWNER hoczi;"

# 3. Import vào db mới
sudo -u postgres psql -d hoczi_production -f hoczi_production.sql


pg_dump -U hoczi -h 127.0.0.1 -d hoczi_db --schema-only -f hoczi_production.sql