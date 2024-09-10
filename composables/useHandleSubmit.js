export const useHandleSubmit = async (obj) => {
    //Отправляем информацию на API https://formsubmit.co/, которыйперенаправляет сообщение на указанную почту. По ключу можно запросить архив.
    const config = useRuntimeConfig();
    let response;
    
    try {

        response = await fetch(`https://formsubmit.co/ajax/${config.public.submit.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(obj) 
        })

    } catch (error) {

        console.error('Ошибка отправки:', error);
        return { response: null, error: error.message };
        
    }
    return response.ok
}