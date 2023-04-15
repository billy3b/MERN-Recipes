const Form = ({username, setUsername, password, setPassword, label, onSubmit}) => {
	return(
		<article className=" mw5 ba b--black-10 mv4 shadow-6 dib ma4">
					<main className="pa4 black-80">
					  <form onSubmit={onSubmit} className="measure center">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						  <legend className="f4 fw6 ph0 mh0">{label}</legend>
							<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
							<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							type="name" name="name"  
							id="name" 
							value={username}
							onChange={(event)=>{setUsername(event.target.value)}}/>
						  </div>
	
						  {/* <div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
							<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							type="email" name="email-address"  
							id="email-address" 
							onChange={this.onEmailChange}/>
						  </div> */}
						  <div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
							<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							type="password" name="password"  
							id="password" 
							value={password}
							onChange={(event)=>{setPassword(event.target.value)}}/>
						  </div>
						</fieldset>
						<div className="">
						  <button 
						  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
						  type="submit" 
						  > 
						  {label} 
						  </button>
						</div>
					  </form>
					</main>
				</article>
	  )
}

export default Form;