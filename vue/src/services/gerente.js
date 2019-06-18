import { http } from './config'

export default	{

	salvar:(gerente)=>{
		return http.post('ge',gerente);
  },
    
	atualizar:(gerente)=>{
		return http.put('ge',gerente);
  },

    listar:()=>{
		return http.get('ge')
  },
    
	apagar:(gerente)=>{
		return http.delete('ge', { data: gerente })
	}
}