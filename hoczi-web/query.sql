CREATE TABLE questions (
    id SERIAL PRIMARY KEY,

    content TEXT NOT NULL,                  -- nội dung câu hỏi
    explanation TEXT,                       -- giải thích

    type VARCHAR(50) NOT NULL,              -- mcq, code, true_false
    difficulty VARCHAR(50),                 -- easy, medium, hard

    category_id INT,
    topic_id INT,

    code JSONB,                             -- 👈 field code JSON

    created_by INT,
    is_active BOOLEAN DEFAULT true,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE answers (
    id SERIAL PRIMARY KEY,

    question_id INT REFERENCES questions(id) ON DELETE CASCADE,

    content TEXT NOT NULL,
    is_correct BOOLEAN DEFAULT false,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE user_answers (
    id SERIAL PRIMARY KEY,

    user_id INT,
    question_id INT,
    answer_id INT,
    session_id INT REFERENCES quiz_sessions(id),

    is_correct BOOLEAN,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE categories (
    id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,

    description TEXT,

    is_active BOOLEAN DEFAULT true,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,

    category_id INT REFERENCES categories(id) ON DELETE CASCADE,

    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,

    description TEXT,

    is_active BOOLEAN DEFAULT true,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    UNIQUE (category_id, slug)
);

CREATE TABLE quiz_sessions (
    id SERIAL PRIMARY KEY,

    user_id INT NOT NULL,
    status VARCHAR(50) DEFAULT 'in_progress',
    score INT DEFAULT 0,
    total_questions INT,
    correct_answers INT,

    start_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMPTZ,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- # test git