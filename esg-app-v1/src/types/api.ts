// src/types/api.ts

export interface ChatRequest {
    user_prompt: string;
    conversation_id?: string;
}

export interface Reference {
    text: string;
    source: string;
}

export interface ChatResponse {
    response: string;
    references: Reference[];
    conversation_id: string;
}