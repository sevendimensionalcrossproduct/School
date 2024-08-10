section .data
    arg dd 20000

section .text
    global _start

_start:
    mov eax, [arg]

    push eax

    call _counter
    
    mov eax, 1
    mov ebx, 0
    int 0x80

    _counter:
        push ebp
        mov ebp, esp
        
        mov ecx, [ebp+8]
        mov ebx, 0
        
        loop:
            inc ebx
            cmp ebx, ecx
            jl loop
            
        mov [result], ebx
        leave
        ret

segment .bss
    result resd 1
