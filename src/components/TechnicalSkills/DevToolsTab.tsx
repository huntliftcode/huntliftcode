import ansible from '/dev_tools/Ansible_logo.svg'
import datadog from '/dev_tools/datadog.png'
import docker from '/dev_tools/docker.svg'
import ghActions from '/dev_tools/github-actions.png'
import newrelic from '/dev_tools/new-relic.svg'
import sumologic from '/dev_tools/sumo-logic.svg'
import terraform from '/dev_tools/terraform.svg'


import { Tooltip } from 'flowbite-react';

export default function DevToolsTab() {
  const renderLogo = (logo: string, tooltip: string, classNames?: string) => {
    return (
      <Tooltip content={tooltip}>
        <img src={logo} className={`w-36 h-auto hover:cursor-help ${classNames}`}></img>
      </Tooltip>
    )
  }
  return (
    <>
        <div className='grid grid-rows-2 gap-4'>
            <div className='grid grid-cols-7 justify-items-center'>
                <span className='col-start-2'>
                    {renderLogo(newrelic, "New Relic")}
                </span>
                <span className='col-start-4'>
                    {renderLogo(docker, "Docker")}
                </span>
                <span className='col-start-6'>
                    {renderLogo(ghActions, "Github Actions", 'rounded-full')}    
                </span>
            </div>
            <div className='grid grid-cols-7 justify-items-center'>
                <span className='col-start-1'>
                    {renderLogo(datadog, "Data Dog")}    
                </span>
                <span className='col-start-3'>
                    {renderLogo(sumologic, "Sumo Logic")}
                </span>
                <span className='col-start-5'>
                    {renderLogo(terraform, "Terraform")}
                </span>
                <span className='col-start-7'>
                    {renderLogo(ansible, "Ansible")}
                </span>
            </div>
        </div>
    </>
  )
}
