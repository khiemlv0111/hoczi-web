CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,
    tenant_id INTEGER REFERENCES tenants(id) ON DELETE CASCADE,
    class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE,
    created_by INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    title VARCHAR(255) NOT NULL,
    description TEXT,
    note TEXT,

    scope VARCHAR(50) NOT NULL DEFAULT 'personal',
    -- personal, tenant, class

    schedule_type VARCHAR(50) NOT NULL DEFAULT 'event',
    -- class, lesson, exam, assignment, meeting, personal, other

    status VARCHAR(50) NOT NULL DEFAULT 'scheduled',
    -- scheduled, ongoing, completed, cancelled, postponed

    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE schedule_users (
    id SERIAL PRIMARY KEY,
    schedule_id INTEGER NOT NULL REFERENCES schedules(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    role VARCHAR(50) NOT NULL,
    -- owner, teacher, student, assistant, observer

    attendance_status VARCHAR(50) NOT NULL DEFAULT 'pending',
    -- pending, accepted, declined, attended, absent, late

    is_required BOOLEAN NOT NULL DEFAULT TRUE,
    -- bắt buộc hay optional

    response_at TIMESTAMP,
    -- thời điểm user accept/decline

    note TEXT,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),

    UNIQUE (schedule_id, user_id)
);